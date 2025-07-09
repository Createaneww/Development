import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import Username from "@/app/[username]/page";
import User from '@/models/User'

export const POST = async (req) => {
    await connectDb()
    let body = await req.formData()
    body = Object.fromEntries(body)

    //Check if RazorpayOrderId is present on the server
    let p = await Payment.findOne({oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({success: false , message: "Order Id not found"})
        // return NextResponse.error("Oredr Id is not found")
    }

    //fetch the secret of the user from db who is getting paid
    let user = await User.findOne({username: p.to_user})
    const secret = user.razorpaysecret

    //verify the PAYMENT
    let xx = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id},body.razorpay_signature , secret)

    if (xx) {
        //Update the payment status
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, {done: "true", updatedAt: new Date() }, { new: true })
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
    }
    else {
        return NextResponse.json({success: false, message:"Payment Verification failed"})
    }
}