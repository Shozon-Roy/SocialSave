import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const faqs = [
  {
    question: "Is SocialSave free to use?",
    answer: "Yes, SocialSave is completely free for all users. We believe that everyone should have access to a simple and reliable tool for downloading online videos and audio for personal use. Our service is supported by a minimal number of non-intrusive advertisements, which allows us to cover our operational costs and continue improving the platform. We are committed to maintaining a free-to-use model without compromising on quality or security, ensuring that you can download content without hidden fees or subscriptions. Our goal is to provide a valuable service that is accessible to everyone, everywhere.",
  },
  {
    question: "What video platforms are supported?",
    answer: "SocialSave supports a vast and ever-growing list of video and audio platforms. This includes major sites like YouTube, Facebook, Instagram, Twitter, TikTok, and Vimeo, as well as many other niche and regional platforms. Our AI-powered system is designed to be highly adaptable; it constantly scans and learns the structures of new websites to expand our compatibility. If you find a platform that isn't supported, please let us know. We are always working to broaden our reach and ensure you can download content from virtually any source you come across online.",
  },
  {
    question: "Can I download videos in 4K resolution?",
    answer: "Yes, absolutely. SocialSave allows you to download videos in the highest quality available from the source. If a video was originally uploaded in 4K, 8K, or any other high-resolution format, you will see it as a download option. Our service does not compress or alter the original video file, ensuring that you get a pixel-perfect copy. We also provide a range of other quality options, from standard definition (SD) to high definition (HD), so you can choose the file size and resolution that best fits your needs, whether you're saving a video for archival purposes or for viewing on a mobile device.",
  },
  {
    question: "Is it legal to download videos?",
    answer: "The legality of downloading videos depends on the content itself and the laws in your specific country. In most regions, it is legal to download content for personal, non-commercial use, such as creating a personal backup or watching it offline. However, downloading and redistributing copyrighted material without the creator's explicit permission is illegal and violates our terms of service. SocialSave is intended to be used as a personal tool. We strongly encourage all users to respect the intellectual property rights of content creators and to use our service responsibly and ethically.",
  },
  {
    question: "Do you store the videos I download?",
    answer: "No, we do not store any of the videos you download, nor do we keep any records of your download history. Your privacy and security are our highest priorities. The entire process is designed to be stateless and anonymous. When you paste a link, our servers fetch the download options for you in real-time and facilitate a direct connection between your device and the content's source. Once your download is complete, there is no trace of the transaction left on our systems. This ensures your activity remains completely private and secure from any third-party tracking or data collection.",
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <section id="faq" className="w-full py-20 md:py-28 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary px-4 py-2 text-sm font-semibold tracking-wider uppercase text-primary">FAQ</div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                  Answers to Your Questions
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Find quick answers to common questions about SocialSave. If you can't find what you're looking for, feel free to contact our support team. We're always here to help you get the most out of our service and ensure your experience is as smooth as possible.
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
      </main>
      <Footer />
    </div>
  );
}
