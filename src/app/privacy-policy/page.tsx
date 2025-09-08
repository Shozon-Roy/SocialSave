import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto py-20 px-4 md:px-6">
          <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl text-foreground">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to SocialSave. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services. By using SocialSave, you agree to the collection and use of information in accordance with this policy. Our primary goal is to provide a secure and anonymous service, and this document details our unwavering commitment to that principle. We believe in transparency and want you to be fully informed about our practices so you can use our services with confidence and peace of mind.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">2. Information We Do Not Collect</h2>
            <p className="text-muted-foreground">
              We have designed our systems from the ground up to be privacy-centric. We want to be explicitly clear about the information we intentionally do not collect:
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li><strong>Personal Information:</strong> We do not require you to create an account or provide any personal information such as your name, email address, or phone number. Our service is accessible to everyone without registration.</li>
                <li><strong>IP Addresses:</strong> We do not log or store your IP address. All connections are processed in a way that anonymizes your identity.</li>
                <li><strong>Download History:</strong> We do not keep any records of the videos you download. Each download session is a stateless transaction that is immediately discarded from our system upon completion.</li>
                <li><strong>Cookies for Tracking:</strong> We do not use cookies to track your activity across different websites or to build a profile about you. We only use essential cookies for basic site functionality, such as remembering your theme preference.</li>
              </ul>
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">3. Information We Collect</h2>
            <p className="text-muted-foreground">
              To operate and improve our service, we collect a minimal amount of non-personal, aggregated data. This information is purely technical and cannot be used to identify you. This includes:
              <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                <li><strong>Aggregated Usage Data:</strong> We collect anonymous statistics, such as the total number of downloads processed and the most frequently used video platforms. This helps us understand service demand and prioritize improvements.</li>
                <li><strong>Error Reports:</strong> We may collect anonymized error reports if our service encounters a problem. This data helps our developers diagnose and fix issues but contains no personally identifiable information.</li>
              </ul>
              This minimal data collection is essential for maintaining the health and performance of SocialSave, allowing us to provide a reliable and efficient service to all our users.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We take data security very seriously. Even though we do not collect personal information, we implement robust security measures to protect our infrastructure and your anonymity. Our website uses SSL/TLS encryption to secure all data transmitted between your browser and our servers. Our infrastructure is regularly audited and updated to protect against potential vulnerabilities. We are committed to employing industry-best practices to ensure that our platform remains a safe and secure environment for all users. Your trust is paramount, and we work tirelessly to protect it by maintaining the highest standards of digital security.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">5. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. We encourage you to review this Privacy Policy periodically for any changes. Your continued use of the service after any modifications to the Privacy Policy will constitute your acknowledgment of the changes and your consent to abide and be bound by the modified policy.
            </p>

          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
