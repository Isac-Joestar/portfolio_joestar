import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

const HandleSendMail = async(req: NextRequest) => {
    try {
        const data = await req.json();
        if (!data.email || !data.message || !data.name) throw new Error("Invalid Data Format");
        const [MAIL_USER,MAIL_PASS] = [process.env[`MAIL_USER`],process.env[`MAIL_PASS`]]
        if(!MAIL_USER || !MAIL_PASS) throw new Error("Unconfigured Mail")
        const transporter = createTransport({
            host: "smtp.zoho.com",
            port: 587,
            auth: {
                user: MAIL_USER,
                pass: MAIL_PASS,
            },
        })
        // VOCÊ -> PESSOA
        await transporter.sendMail({
            to: data.email,
            text: `Bom Dia ${data.name}\nRecebemos sua mensagem de contato: ${data.message}`,
            from: MAIL_USER,
            subject: `Contato ${data.name}`,
        })
        return NextResponse.json({
            status: true
        })
    } catch (err) {
        console.error(err)
        return NextResponse.json({
            status: false,
            err
        })
    }
}

export const POST = HandleSendMail;