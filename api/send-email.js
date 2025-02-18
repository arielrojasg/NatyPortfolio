import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function generateEmailTemplate(data) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>New Enquiry</title>
      <style>
        /* Import fonts (note: some email clients may ignore @font-face) */
        @font-face {
          font-family: 'Poppins';
          font-weight: normal;
          src: url('https://naty-portfolio.vercel.app/fonts/Poppins-Light.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Poppins';
          font-weight: bold;
          src: url('https://naty-portfolio.vercel.app/fonts/Poppins-Bold.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Poppins';
          font-weight: 500;
          src: url('https://naty-portfolio.vercel.app/fonts/Poppins-Medium.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Poppins';
          font-weight: 300;
          src: url('https://naty-portfolio.vercel.app/fonts/Poppins-Light.ttf') format('truetype');
        }
        @font-face {
          font-family: 'roc-grotesk-condensed';
          font-weight: 500;
          src: url('https://naty-portfolio.vercel.app/fonts/Roc-Grotesk-Condensed-Bold.ttf') format('truetype');
        }
        /* General styling */
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', Arial, sans-serif;
          color: #1E1E1E;
        }
        .container {
          height: 330vw;
          background-repeat: no-repeat;
          background-size: 100% auto;
          background-position: top;
          padding-left: 10%;
          padding-right: 10%;
          border-radius: 5px;
          text-align: left;
          max-width: 70%;
          margin: 10% auto 0 auto;
        }
        h1 {
          color: #1E1E1E;
          text-align: center;
          font-family: 'roc-grotesk-condensed', sans-serif;
          font-size: 5.5vw;
          text-transform: uppercase;
          background-color: #F99FF9;
          padding-top: 1.5%;
          margin: 1% 15%;
        }
        label, p, ul {
          color: #1E1E1E;
          font-size: 3vw;
          font-weight: 300;
          line-height: 147.4%;
          margin-bottom: 0.5em;
        }
        .textInput {
          width: calc(100% - 1.39vw);
          border: 0.18vw solid #ccc;
          border-radius: 0.38vw;
          padding: 0.9vw;
          margin-bottom: 1em;
        }
        ul {
          list-style: none;
          padding-left: 0;
        }
        ul li::before {
          content: "\\2713";
          color: #1E1E1E;
          font-size: 4.8vw;
          display: inline-block;
          width: 4.2vw;
          margin-right: 0.2vw;
          vertical-align: middle;
          background-color: #F99FF9;
          border-radius: 0.3vw;
          font-weight: 500;
        }
        .footer-note {
          font-size: 2vw;
          color: #888;
          margin-top: 20px;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <p style="text-align: center; padding-top: 20%;">Gracias por rellenar</p>
        <h1>MI FORM DE CONTACTO</h1>
        <p style="text-align: center;">Esto es lo que se recibió:</p>

        <label>Nombre*</label>
        <p class="textInput">${data.firstName}</p>

        <label>Apellido</label>
        <p class="textInput">${data.lastName}</p>

        <label>Correo electrónico*</label>
        <p class="textInput">${data.email}</p>

        <label>Nombre del negocio*</label>
        <p class="textInput">${data.businessName}</p>

        <label>Método de contacto alternativo*</label>
        <p class="textInput">${data.contact}</p>

        <label>¿De qué país eres?*</label>
        <p class="textInput">${data.location}</p>

        <label>Link a tu sitio web o red social (si aplica)</label>
        <p class="textInput">${data.website || "N/A"}</p>

        <label>Háblame sobre ti y tu negocio, por favor sé detallado en tu respuesta*</label>
        <p class="textInput">${data.aboutYou}</p>

        <label>¿Qué servicio estás buscando?*</label>
        <ul>
          ${Array.isArray(data.services) ? data.services.map(s => `<li>${s}</li>`).join("") : ""}
        </ul>

        <label>¿Cuál es tu presupuesto para este proyecto? ($USD)*</label>
        <p class="textInput">${data.budget}</p>

        <label>¿Dónde escuchaste de mí?*</label>
        <ul>
          ${Array.isArray(data.sources) ? data.sources.map(s => `<li>${s}</li>`).join("") : ""}
        </ul>

        <label>¿Por qué te gustaría trabajar conmigo?</label>
        <p class="textInput">${data.additionalInfo || "No additional info provided."}</p>

        <p class="footer-note">This email was automatically generated.</p>
      </div>
    </body>
  </html>
  `;
}


export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.writeHead(200, corsHeaders);
    res.end();
    return;
  }

  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, businessName, contact, location, website, aboutYou, services, budget, sources, additionalInfo } = req.body;

      const htmlContent = generateEmailTemplate(req.body);

      const response = await axios.post(
        "https://api.brevo.com/v3/smtp/email",
        {
          sender: { name: "Natalia Villalobos", email: "hello@itsnvillalobos.com" },
          to: [{ email: "arielrojasg18@gmail.com", name: "Prueba" }],
          subject: "New Enquiry",
          htmlContent: htmlContent,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "accept": "application/json",
            "api-key": process.env.BREVO_API_KEY,
          },
        }
      );

      res.writeHead(200, { "Content-Type": "application/json", ...corsHeaders });
      res.end(JSON.stringify({ success: true, message: "Email sent successfully", response: response.data }));
    } catch (error) {
      console.error("Error sending email:", error.response?.data || error.message);
      res.writeHead(500, { "Content-Type": "application/json", ...corsHeaders });
      res.end(JSON.stringify({ success: false, error: error.response?.data || error.message }));
    }
  } else {
    res.writeHead(405, { "Content-Type": "application/json", ...corsHeaders });
    res.end(JSON.stringify({ success: false, message: "Method not allowed" }));
  }
}
