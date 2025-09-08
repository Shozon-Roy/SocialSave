import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const faqs = [
  {
    question: "Is SocialSave free to use?",
    answer: "Yes, SocialSave is completely free to use. We are supported by non-intrusive ads to keep the service running.",
  },
  {
    question: "What video platforms are supported?",
    answer: "We support a wide range of platforms including YouTube, Vimeo, TikTok, Instagram, Facebook, and many more. Our AI-powered system is constantly learning to support new sites.",
  },
  {
    question: "Can I download videos in 4K resolution?",
    answer: "Yes, if the original video is available in 4K, you will have the option to download it in that quality. We support all available resolutions.",
  },
  {
    question: "Is it legal to download videos?",
    answer: "Downloading copyrighted material without permission may be illegal in your country. Please respect the copyright of content creators. SocialSave should be used for personal purposes only.",
  },
  {
    question: "Do you store the videos I download?",
    answer: "No, we do not store any of your downloaded videos or keep a history of your downloads. Your privacy is our top priority.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="w-full py-20 md:py-28 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-4 py-2 text-sm font-semibold tracking-wider uppercase text-primary">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
              Answers to Your Questions
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Find quick answers to common questions about SocialSave.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-secondary bg-secondary/30 rounded-lg transition-all hover:bg-secondary/50 hover:border-primary/50"
              >
                <AccordionTrigger className="text-left text-lg font-medium px-6 py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground px-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
