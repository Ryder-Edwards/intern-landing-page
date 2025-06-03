"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      })
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500/20 mb-4">
          <CheckCircle2 className="w-8 h-8 text-teal-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-gray-300 mb-6">Thank you for reaching out. A member of our team will contact you shortly.</p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-gray-700 hover:bg-gray-800 text-gray-300"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Name
        </label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
          placeholder="your.email@company.com"
          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
          Company
        </label>
        <Input
          id="company"
          name="company"
          value={formState.company}
          onChange={handleChange}
          required
          placeholder="Your company"
          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          placeholder="How can we help you?"
          rows={4}
          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-500 hover:bg-teal-400 text-gray-900 font-medium"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
