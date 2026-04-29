import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import emailjs from "@emailjs/browser";

const RegisterFestivalPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_23",              // ✅ your service ID
        "template_bnyn53a",        // ✅ your template ID
        e.target,
        "QVXTwhHtn-K2wspbN"        // ⚠️ your public key
      )
      .then(() => {
        alert("Registration sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send registration");
      });
  };

  return (
    <section className="min-h-screen py-10 px-4 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-3xl mx-auto">

        {/* BACK BUTTON */}
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </div>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Registration</h1>
          <p className="text-gray-600">
            Join the Mithila Festival USA and experience culture, art, and tradition.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 space-y-6"
        >
          <div>
            <label>Full Name</label>
            <Input name="full_name" placeholder="Enter your full name" />
          </div>

          <div>
            <label>Email</label>
            <Input name="email" type="email" placeholder="Enter your email" />
          </div>

          <div>
            <label>Phone</label>
            <Input name="phone" placeholder="Enter phone number" />
          </div>

          <div>
            <label>Attendees</label>
            <Input name="attendees" type="number" placeholder="e.g. 2" />
          </div>

          <div>
            <label>Participation Type</label>
            <select name="type" className="w-full mt-1 border p-2 rounded">
              <option>Visitor</option>
              <option>Artist</option>
              <option>Volunteer</option>
              <option>Workshop Participant</option>
            </select>
          </div>

          <div>
            <label>Message</label>
            <Textarea name="message" placeholder="Any special requests..." />
          </div>

          <Button type="submit" className="w-full">
            Register Now
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default RegisterFestivalPage;
