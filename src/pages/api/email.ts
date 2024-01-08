import type { NextRequest } from "next/server";
import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import ContactEmail from "@/pages/email/contactEmail";
import { Resend } from "resend";
export const runtime = "edge";
/* export const config = {
  runtime: "edge",
}; */
export default async function handler(req: NextRequest) {
  // HTTP istek metodunu kontrol edin
  if (req.method !== "POST") {
    // POST olmayan istekler için 405 Method Not Allowed yanıtı döndür
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    // İstek gövdesini JSON olarak ayrıştır
    const body = await req.json();

    const to = body.to || "abidinayhan94@gmail.com";
    const name = body.name || "No name";
    const email = body.email || "No email";
    const message = body.message || "No message";
    const relatedUnit = body.relatedUnit || "No related unit";

    const resend = new Resend("re_L7kzbXrd_AHaizxYURhmdF3epUMsnbQEW");

    const { data, error } = await resend.emails.send({
      from: "DATS PROJECT <test@zeynel.dev>",
      to: to, //"abidinayhan94@gmail.com",
      subject: `Dats Project - Contact Form - ${relatedUnit}`,
      react: ContactEmail({
        name: name,
        email: email,
        message: message,
        relatedUnit: relatedUnit,
      }),
    });
    if (error) {
      // Hata durumunda 500 Internal Server Error yanıtı döndür
      return new Response(
        JSON.stringify({
          message: "Internal Server Error",
          error: error?.message,
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Success",
        data: data,
        body: {
          to: to,
          name: name,
          email: email,
          message: message,
          relatedUnit: relatedUnit,
        },
      }),
      {
        status: 200, // Başarılı işlem
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    // Hata durumunda 500 Internal Server Error yanıtı döndür
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error?.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

/* import type { NextRequest } from "next/server";
import { render } from "@react-email/render";
import { sendEmail } from "@/lib/email";
import ContactEmail from "@/pages/email/contactEmail";

//export const runtime = "edge";
export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const body:any = req.json();
  return new Response(JSON.stringify({ message: "Method not allowed", body }));
  /* const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST,GET");
  headers.set("Access-Control-Allow-Headers", "Content-Type");
  headers.set("Access-Control-Max-Age", "86400");
  headers.set("Content-Type", "application/json");
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, { headers });
    }
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ message: "Method not allowed" }));
    }

    const body: any = req.body;
    const to = body.to;
    const name = body.name || "No name";
    const email = body.email || "No email";
    const message = body.message || "No message";
    const relatedUnit = body.relatedUnit || "No related unit";

    const result = await sendEmail({
      to: to,
      subject: `Dats Project - Contact Form - ${relatedUnit}`,
      html: render(
        ContactEmail({
          name: name,
          email: email,
          message: message,
          relatedUnit: relatedUnit,
        })
      ),
    });
    if (!result) {
      return new Response(
        JSON.stringify({ message: "Email failed to send", to: to })
      );
    }
    return new Response(
      JSON.stringify({ message: "Email sent successfully", to: to })
    );
  } catch (error) {
    console.error("Hata oluştu:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  } 
}
 */
