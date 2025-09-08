import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-20 px-4 md:px-6">
          <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl text-foreground">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using SocialSave (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service. This is a legally binding agreement, and we encourage you to read it carefully to understand your rights and obligations as a user of our platform. Your continued use signifies your full acceptance of these terms.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground">
              SocialSave is a free web-based tool that allows users to download video and audio content from various online platforms for personal use. The Service is provided "as is" and is subject to change or termination without notice at our sole discretion. We do not host, store, or distribute any of a user's content. Our platform acts solely as an intermediary, providing you with a technical means to access content from third-party servers. We are constantly working to improve and expand our service offerings, which may include adding support for new platforms, enhancing download speeds, or introducing new features. We reserve the right to modify or discontinue the service at any time.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">3. User Conduct and Responsibilities</h2>
            <p className="text-muted-foreground">
              You, the user, are solely responsible for the content you download and the way you use it. You agree to use the Service in compliance with all applicable local, state, national, and international laws, rules, and regulations. Specifically, you agree not to:
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li>Download, share, or use any content for which you do not have the legal right or permission.</li>
                <li>Infringe upon the intellectual property rights, including copyrights and trademarks, of any third party.</li>
                <li>Use the Service for any commercial purpose, including reselling or redistributing downloaded content.</li>
                <li>Use automated systems, such as bots or scrapers, to access or interact with our Service in a way that could impair its functionality or impose an unreasonable load on our infrastructure.</li>
              </ul>
              Violation of these terms may result in immediate and permanent termination of your access to the Service.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">4. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground">
              The Service is provided on an "as is" and "as available" basis. SocialSave expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the service will meet your specific requirements, that it will be uninterrupted, timely, secure, or error-free, or that the quality of any products, services, information, or other material obtained by you through the service will meet your expectations. You download content at your own risk and discretion.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              You expressly understand and agree that SocialSave shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use or the inability to use the service. This includes any damages arising from your use of downloaded content. Our liability is limited to the maximum extent permitted by law in the applicable jurisdiction. We are not responsible for the content you download or any legal repercussions that may arise from its use.
            </p>

          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
