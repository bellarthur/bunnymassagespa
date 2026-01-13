"use client"

import { useEffect, useRef, useState } from "react"

type Step =
  | "age"
  | "intent"
  | "service"
  | "comfort"
  | "name"
  | "date"
  | "time"
  | "party"
  | "location"
  | "confirm"
  | "done"

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState<Step>("age")
  const [messages, setMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([])
  const [data, setData] = useState<any>({})
  const [datePick, setDatePick] = useState("")
  const panelRef = useRef<HTMLDivElement | null>(null)

  const DRAFT_KEY = "bunny_booking_draft"
  const [draftFound, setDraftFound] = useState<any>(null)

  useEffect(() => {
    // initial welcome when dialog opens; offer to resume a draft if present
    if (open) {
      try {
        const raw = localStorage.getItem(DRAFT_KEY)
        if (raw) {
          const parsed = JSON.parse(raw)
          setDraftFound(parsed)
          setMessages([
            { sender: "bot", text: "Welcome back. I found an unfinished booking. Would you like to continue where you left off or start over?" },
          ])
          // do not auto-set step so user explicitly chooses resume or start over
          return
        }
      } catch (e) {
        localStorage.removeItem(DRAFT_KEY)
      }

      setMessages([
        { sender: "bot", text: "Welcome. I can help you choose a service and arrange a booking." },
        { sender: "bot", text: "Before we continue, I need to confirm one thing." },
        { sender: "bot", text: "Are you 18 years or older and booking for yourself?" },
      ])
      setStep("age")
    }
  }, [open])

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", listener)
    return () => window.removeEventListener("keydown", listener)
  }, [])

  function pushBot(text: string) {
    setMessages((m) => [...m, { sender: "bot", text }])
  }
  function pushUser(text: string) {
    setMessages((m) => [...m, { sender: "user", text }])
  }

  // Draft handling: save and restore
  function clearDraft() {
    try { localStorage.removeItem(DRAFT_KEY) } catch (e) {}
    setDraftFound(null)
  }

  function continueDraft() {
    if (!draftFound) return
    setData(draftFound.data || {})
    setDatePick(draftFound.datePick || "")
    setMessages(draftFound.messages || [])
    setStep(draftFound.step || "name")
    setDraftFound(null)
    // focus panel after restoring
    setTimeout(() => panelRef.current?.focus(), 10)
  }

  function startOver() {
    clearDraft()
    setData({})
    setDatePick("")
    setMessages([
      { sender: "bot", text: "Welcome. I can help you choose a service and arrange a booking." },
      { sender: "bot", text: "Before we continue, I need to confirm one thing." },
      { sender: "bot", text: "Are you 18 years or older and booking for yourself?" },
    ])
    setStep("age")
    setTimeout(() => panelRef.current?.focus(), 10)
  }

  // auto-save draft to localStorage while the panel is open
  useEffect(() => {
    if (!open) return
    if (step === "done") return
    // only save if there is some meaningful data
    const hasData = Object.keys(data || {}).length > 0 || datePick || (messages && messages.length > 0)
    if (!hasData) return
    try {
      const payload = { step, data, datePick, messages }
      localStorage.setItem(DRAFT_KEY, JSON.stringify(payload))
    } catch (e) {}
  }, [step, data, datePick, messages, open])

  // focus panel when opened
  useEffect(() => {
    if (open) panelRef.current?.focus()
  }, [open])

  function handleAge(answer: "yes" | "no") {
    pushUser(answer === "yes" ? "Yes" : "No")
    if (answer === "no") {
      pushBot("I’m sorry — our services are strictly for adults only. You may return when you are eligible.")
      setStep("done")
      return
    }
    // record confirmation so a resumed draft can skip the age gate
    setData((d: any) => ({ ...d, ageConfirmed: true }))
    pushBot(
      "Thank you. Our sessions are professional wellness services focused on relaxation, body awareness, and stress relief. Which best describes what you’re looking for?"
    )
    setStep("intent")
  }

  function handleIntent(choice: string) {
    pushUser(choice)
    if (choice.toLowerCase().includes("explicit") || choice.toLowerCase().includes("sexual")) {
      pushBot(
        "I need to clarify something. We do not offer any illegal or unsafe services. All sessions are based on consent, professionalism, and wellbeing."
      )
      setStep("intent")
      return
    }
    pushBot("Understood. Which session would you like to learn more about?")
    setStep("service")
  }

  function handleService(choice: string) {
    pushUser(choice)
    setData((d: any) => ({ ...d, service: choice }))

    const safeDescriptions: Record<string, string> = {
      "Deep Tissue":
        "Deep Tissue — A focused treatment to release tension in deeper muscle layers, suitable for postural discomfort and chronic tension.",
      Sensual: "Sensual — A respectful, calming session aimed at body awareness and relaxation for consenting adults.",
      Nuru: "Nuru — A unique, private, adult-only session designed for relaxation and connection in a respectful environment.",
      Erotic: "Erotic Massage — A consenting-adult service designed for relaxation and personal pleasure in a respectful, private environment. It does not include illegal or unsafe activity, and boundaries are always honored.",
      Couples: "Couples — A shared session focusing on relaxation and mutual wellbeing for two consenting adults.",
    }

    pushBot(safeDescriptions[choice] || "This session is offered in a professional, private setting.")
    pushBot("Would you like to continue with this service?")
    setStep("comfort")
  }

  function handleComfort(answer: "agree" | "questions") {
    pushUser(answer === "agree" ? "I agree" : "I have questions")
    if (answer === "questions") {
      pushBot("What would you like to know? I can explain what's allowed, what's not allowed, or our privacy & safety practices.")
      // keep at comfort step but show options in UI
      return
    }
    pushBot("Great. I’ll prepare your booking request. What is your first name?")
    setStep("name")
  }

  function handleName(name: string) {
    pushUser(name)
    setData((d: any) => ({ ...d, name }))
    pushBot(`Thanks, ${name}. When would you like your session?`)
    setStep("date")
  }

  function pickDate(option: "today" | "tomorrow" | "pick") {
    if (option === "today") {
      const d = new Date()
      const dateStr = d.toDateString()
      pushUser("Today")
      setData((d2: any) => ({ ...d2, date: dateStr }))
      pushBot("What time works best?")
      setStep("time")
      return
    }
    if (option === "tomorrow") {
      const d = new Date()
      d.setDate(d.getDate() + 1)
      const dateStr = d.toDateString()
      pushUser("Tomorrow")
      setData((d2: any) => ({ ...d2, date: dateStr }))
      pushBot("What time works best?")
      setStep("time")
      return
    }
    pushUser("Pick a date")
    setStep("date") // show date picker UI
  }

  function submitPickedDate() {
    if (!datePick) return
    pushUser(datePick)
    setData((d2: any) => ({ ...d2, date: new Date(datePick).toDateString() }))
    pushBot("What time works best?")
    setStep("time")
  }

  function chooseTime(slot: string) {
    pushUser(slot)
    setData((d: any) => ({ ...d, time: slot }))
    pushBot("Are you booking for just yourself or for two people?")
    setStep("party")
  }

  function chooseParty(p: "solo" | "couple") {
    pushUser(p === "solo" ? "Just me" : "Me and someone else")
    setData((d: any) => ({ ...d, party: p }))
    pushBot("Where would you like the session? In-studio or outcall (home / hotel)?")
    setStep("location")
  }

  function chooseLocation(loc: string) {
    pushUser(loc)
    setData((d: any) => ({ ...d, location: loc }))
    pushBot("Please review your booking details below. Is this correct?")
    setStep("confirm")
  }

  function confirmBooking(edit?: boolean) {
    if (edit) {
      // allow editing; return to name for simplicity
      setStep("name")
      return
    }
    pushBot("Everything is ready. Tap the button below to send your booking request privately on WhatsApp. A staff member will confirm availability and payment.")
    setStep("done")
  }

  function sendToWhatsApp() {
    const number = "233247932681"
    const body = `Hello, my name is ${data.name}.\nI would like to book a ${data.service} session.\nDate: ${data.date}\nTime: ${data.time}\nSession: ${data.party === "solo" ? "Solo" : "Couple"}\nLocation: ${data.location}`
    const url = `https://wa.me/${number}?text=${encodeURIComponent(body)}`
    window.open(url, "_blank")
    // booking in progress — clear local draft
    clearDraft()
  }

  // Minimal progress indicator
  const stepIndex = ["age", "intent", "service", "comfort", "name", "date", "time", "party", "location", "confirm", "done"].indexOf(step)
  const progressStage = (() => {
    const map: Record<string, number> = { age: 1, intent: 2, service: 3, comfort: 4, name: 4, date: 4, time: 4, party: 4, location: 4, confirm: 4, done: 4 }
    return map[step] || 1
  })()

  return (
    <div className="fixed right-3 bottom-20 z-50">
      {/* Launcher */}
      {!open && (
        <button
          aria-label="Open private booking assistant"
          onClick={() => setOpen(true)}
          className="w-12 h-12 rounded-xl bg-[rgba(20,20,20,0.9)] text-amber-300 flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          {/* chat icon (simple) */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          tabIndex={-1}
          role="dialog"
          aria-label="Private Booking Assistant"
          className="w-88 md:w-95 max-h-[70vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transform transition duration-150 ease-out"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div>
              <div className="text-sm font-medium">Private Booking Assistant</div>
              <div className="text-xs text-muted-foreground">Confidential &amp; 18+</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-500 flex items-center gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className={`w-2 h-2 rounded-full ${i < progressStage ? "bg-amber-400" : "bg-gray-200"}`} />
                ))}
              </div>
              <button
                aria-label="Minimize"
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-md hover:bg-gray-100 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Message area */}
          <div role="log" aria-live="polite" aria-atomic="true" className="px-3 py-3 overflow-auto flex-1 space-y-3 bg-gray-50">
            {step === "service" && (data.service === "Sensual" || data.service === "Erotic") && (
              <div className="rounded-md bg-amber-50 text-amber-700 text-xs px-3 py-2 border-l-4 border-amber-200">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a7 7 0 0 1 7 7v3a7 7 0 0 1-14 0V9a7 7 0 0 1 7-7z" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11v4" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Private, adult-only service — handled discreetly</span>
                </div>
              </div>
            )}

            {messages.map((m, idx) => (
              <div key={idx} className={`max-w-[86%] ${m.sender === "bot" ? "bg-white text-gray-900 self-start" : "bg-gray-200 self-end text-gray-900"} px-3 py-2 rounded-lg shadow-sm`}> 
                <div className="text-sm">{m.text}</div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="px-4 py-3 border-t bg-white">
            {/* Age step */}
            {step === "age" && (
              <div>
                {draftFound && (
                  <div className="mb-2 flex gap-2">
                    <button className="flex-1 border border-gray-200 py-2 px-3 rounded-md" onClick={continueDraft}>Continue where I left off</button>
                    <button className="flex-1 bg-white text-slate-900 py-2 px-3 rounded-md border border-gray-200" onClick={startOver}>Start over</button>
                  </div>
                )}
                <div className="flex gap-2">
                  <button className="flex-1 bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleAge("yes")}>Yes</button>
                  <button className="flex-1 border border-gray-200 py-2 px-3 rounded-md hover:bg-gray-50" onClick={() => handleAge("no")}>No</button>
                </div>
              </div>
            )}

            {/* Intent */}
            {step === "intent" && (
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleIntent("Relaxation & stress relief")}>Relaxation &amp; stress relief</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleIntent("Sensory / body awareness")}>Sensory / body awareness</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleIntent("Couple experience")}>Couple experience</button>
                <button className="border border-gray-200 py-2 px-3 rounded-md hover:bg-gray-50" onClick={() => handleIntent("Not sure — I want to explore")}>Not sure — explore</button>
              </div>
            )}

            {/* Service */}
            {step === "service" && (
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleService("Deep Tissue")}>Deep Tissue</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleService("Sensual")}>Sensual</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleService("Nuru")}>Nuru</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleService("Erotic")}>Erotic</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleService("Couples")}>Couples</button>
              </div>
            )}

            {/* Comfort */}
            {step === "comfort" && (
              <div className="flex gap-2">
                <button className="flex-1 bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => handleComfort("agree")}>I agree</button>
                <button className="flex-1 border border-gray-200 py-2 px-3 rounded-md hover:bg-gray-50" onClick={() => handleComfort("questions")}>I have questions</button>
              </div>
            )}

            {/* Name */}
            {step === "name" && (
              <NameInput onSubmit={handleName} />
            )}

            {/* Date */}
            {step === "date" && (
              <div className="grid grid-cols-3 gap-2">
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => pickDate("today")}>Today</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => pickDate("tomorrow")}>Tomorrow</button>
                <div className="col-span-3 flex gap-2">
                  <input type="date" value={datePick} onChange={(e) => setDatePick(e.target.value)} className="flex-1 border border-gray-200 rounded-md px-3 py-2" />
                  <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={submitPickedDate}>Set</button>
                </div>
              </div>
            )}

            {/* Time */}
            {step === "time" && (
              <div className="grid grid-cols-2 gap-2">
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => chooseTime("Morning")}>Morning</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => chooseTime("Afternoon")}>Afternoon</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => chooseTime("Evening")}>Evening</button>
                <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => chooseTime("Late night")}>Late night</button>
              </div>
            )}

            {/* Party */}
            {step === "party" && (
              <div className="flex gap-2">
                <button className="flex-1 bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => chooseParty("solo")}>Just me</button>
                <button className="flex-1 border border-gray-200 py-2 px-3 rounded-md hover:bg-gray-50" onClick={() => chooseParty("couple")}>Me and someone else</button>
              </div>
            )}

            {/* Location */}
            {step === "location" && (
              <div className="flex gap-2">
                <button className="flex-1 bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => chooseLocation("In-studio")}>In-studio</button>
                <button className="flex-1 border border-gray-200 py-2 px-3 rounded-md hover:bg-gray-50" onClick={() => chooseLocation("Outcall")}>Home / hotel</button>
              </div>
            )}

            {/* Confirm */}
            {step === "confirm" && (
              <div className="space-y-2">
                <div className="bg-gray-50 p-3 rounded-md text-sm shadow-sm">
                  <div><strong>Name:</strong> {data.name}</div>
                  <div><strong>Service:</strong> {data.service}</div>
                  <div><strong>Date:</strong> {data.date}</div>
                  <div><strong>Time:</strong> {data.time}</div>
                  <div><strong>Session:</strong> {data.party === "solo" ? "Solo" : "Couple"}</div>
                  <div><strong>Location:</strong> {data.location}</div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => confirmBooking()}>Yes — continue</button>
                  <button className="flex-1 border border-gray-200 py-2 px-3 rounded-md hover:bg-gray-50" onClick={() => confirmBooking(true)}>Edit</button>
                </div>
              </div>
            )}

            {/* Done: show WhatsApp Handoff */}
            {step === "done" && (
              <div className="space-y-2">
                <button onClick={sendToWhatsApp} className="w-full bg-green-600 hover:bg-green-700 text-white rounded-md py-2">Send booking to WhatsApp</button>
                <div className="text-xs text-gray-500">A staff member will reply to confirm availability and payment.</div>
              </div>
            )}

            {/* Done (age denied) messages are left as conversation only */}
          </div>
        </div>
      )}


    </div>
  )
}

function NameInput({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [val, setVal] = useState("")
  return (
    <div className="flex gap-2">
      <input className="flex-1 border border-gray-200 rounded-md px-3 py-2" placeholder="First name" value={val} onChange={(e) => setVal(e.target.value)} />
      <button className="bg-slate-900 text-white py-2 px-3 rounded-md hover:scale-[1.02] transition" onClick={() => val.trim() && onSubmit(val.trim())}>Continue</button>
    </div>
  )
}
