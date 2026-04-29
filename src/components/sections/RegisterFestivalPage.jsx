import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const RegisterFestivalPage = () => {
  const navigate = useNavigate();

  // Initialize EmailJS once when component loads
  useEffect(() => {
    emailjs.init("QVXTwhHtn-K2wspbN"); // Your Public Key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      full_name: form.full_name.value,
      email: form.email.value,
      phone: form.phone.value,
      attendees: form.attendees.value,
      participation_type: form.type.value,
      message: form.message.value,
      submitted_at: new Date().toLocaleString(),
    };

    console.log("Sending to EmailJS:", formData);

    emailjs
      .send(
        "service_23", // Your Service ID
        "template_enroll_child", // Your Template ID
        {
          to_email: "rachanmandal998@gmail.com",
          from_name: formData.full_name,
          reply_to: formData.email,
          json_data: JSON.stringify(formData, null, 2),
          subject: `New Festival Registration - ${formData.full_name}`,
        }
      )
      .then((result) => {
        console.log("EmailJS SUCCESS:", result);
        alert("✅ Registration sent successfully! Check your email.");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS ERROR:", error);
        alert(`❌ Failed to send: ${error.text || error.message}`);
      });
  };

  return (
    <section className="min-h-screen pt-6 pb-20 px-4 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-3xl mx-auto">
        {/* BACK BUTTON */}
        <div className="mb-4">
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Registration</h1>
          <p className="text-gray-600">
            Join the Mithila Festival USA and experience culture, art, and tradition.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 space-y-5"
        >
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <Input name="full_name" placeholder="Enter your full name" required />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <Input name="email" type="email" placeholder="Enter your email" required />
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <Input name="phone" placeholder="Enter phone number" required />
          </div>

          <div>
            <label className="text-sm font-medium">Number of Attendees</label>
            <Input name="attendees" type="number" placeholder="e.g. 2" required />
          </div>

          <div>
            <label className="text-sm font-medium">Participation Type</label>
            <select name="type" className="w-full mt-1 border p-2 rounded" required>
              <option value="Visitor">Visitor</option>
              <option value="Artist">Artist</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Workshop Participant">Workshop Participant</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
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