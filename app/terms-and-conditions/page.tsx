import { Content } from "@/components/custom";
import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="w-full h-full bg-white py-10 md:py-24 px-4 md:px-20 2xl:p-32 flex justify-center">
      <div className="max-w-[846px] flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-primary-dark text-[28px] md:text-5xl font-medium">
            Sawalif&apos;s Terms and Conditions of Use
          </h1>

          <p className="font-normal text-base text-neutral-gray200">
            If you live outside the United States, these Terms and Conditions
            apply to you. If you live in the United States, the Badoo Terms and
            Conditions available here(opens in new window) apply to you.
          </p>
        </div>

        <Content
          title="The Summary"
          desc="Hello. You should read these terms and conditions in full because they apply every time you visit Badoo and use any of its features. However, just in case you ever need a reminder of the main points, here's a quick summary:"
          content={
            <>
              <div className="text-neutral-gray200 text-base font-normal pt-3 flex flex-col gap-y-4">
                <p>
                  1. If you are under the age of 18 then unfortunately you
                  can&apos;t use Badoo yet because it&apos;s a meeting place for
                  adults only.
                </p>

                <p>
                  2. We&apos;re not responsible for anything that you post or
                  say while you are on Badoo and we don&apos;t assume any
                  obligation to monitor the content of the site, but if we do
                  see or someone alerts us that you have posted something that
                  we think is inappropriate then we are allowed at our
                  discretion to remove it.
                </p>

                <p>
                  3. If you post any content that actually belongs to someone
                  else and they get annoyed (or even call in their lawyers), we
                  are not in the firing line. You have to take responsibility
                  for what you post.
                </p>

                <p>
                  4. Please refer to our Community Guidelines and Safety Tips
                  for additional Dos and Don&apos;ts, and information on staying
                  safe.
                </p>

                <p>
                  5. If you are concerned about how your data is being used by
                  Badoo then please refer to our Privacy Policy (opens in new
                  window), which explains how we treat your personal data and
                  protect your privacy when you use Badoo. By using Badoo, you
                  acknowledge that we can use such data in accordance with our
                  Privacy Policy. Our website and apps also use cookies or
                  similar technologies which we tell you more about on our
                  Privacy Policy (opens in new window) page. You may set your
                  browser and your mobile settings to block cookies and local
                  storage devices, but if you do so, you may not be able to
                  access the features that Badoo offers.
                </p>
              </div>
            </>
          }
        />

        <Content
          title="1. OUR SERVICES"
          desc="The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable."
          content={
            <>
              <div className="text-neutral-gray200 text-base font-normal pt-3 flex flex-col gap-y-4">
                <p>
                  The Services are not tailored to comply with industry-specific
                  regulations (Health Insurance Portability and Accountability
                  Act (HIPAA), Federal Information Security Management Act
                  (FISMA), etc.), so if your interactions would be subjected to
                  such laws, you may not use the Services. You may not use the
                  Services in a way that would violate the Gramm-Leach-Bliley
                  Act (GLBA).
                </p>
              </div>
            </>
          }
        />

        <Content
          title="2. INTELLECTUAL PROPERTY RIGHTS"
          desc="The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable."
          content={
            <>
              <div className="text-neutral-gray200 text-base font-normal pt-3 flex flex-col gap-y-4">
                <p>
                  The Services are not tailored to comply with industry-specific
                  regulations (Health Insurance Portability and Accountability
                  Act (HIPAA), Federal Information Security Management Act
                  (FISMA), etc.), so if your interactions would be subjected to
                  such laws, you may not use the Services. You may not use the
                  Services in a way that would violate the Gramm-Leach-Bliley
                  Act (GLBA).
                </p>
              </div>
            </>
          }
        />
      </div>
    </section>
  );
};

export default TermsAndConditions;
