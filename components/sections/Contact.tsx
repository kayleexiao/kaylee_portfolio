import ContactForm from '@/components/ContactForm'
import Icon from '@/components/ui/Icon'
import Section from '@/components/ui/Section'

export default function Contact() {
  return (
    <Section id="contact" className="scroll-mt-24">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="contact-star" className="w-6 h-6 text-rose-500" alt="" />
            <h2 className="text-3xl md:text-4xl font-bold text-ink">
              CONTACT ME
            </h2>
          </div>
          <p className="text-lg text-ink/70">
            Let's connect - I'd love to hear from you!
          </p>
        </div>
        
        <ContactForm />
      </div>
    </Section>
  )
}
