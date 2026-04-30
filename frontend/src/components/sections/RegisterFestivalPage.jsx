import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const RegisterFestivalPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Registration sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send email");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server error");
    }
  };

  return (
    <section className="min-h-screen pt-8 pb-20 px-4 bg-gradient-to-b from-amber-50 to-orange-100">
      <div className="max-w-3xl mx-auto">

        <div className="mb-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Registration</h1>
          <p>Join the Mithila Festival USA</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 space-y-5"
        >
          <Input name="full_name" placeholder="Full Name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="phone" placeholder="Phone" required />
          <Input name="attendees" type="number" placeholder="Attendees" required />

          <select name="type" className="w-full border p-2 rounded">
            <option value="Visitor">Visitor</option>
            <option value="Artist">Artist</option>
            <option value="Volunteer">Volunteer</option>
          </select>

          <Textarea name="message" placeholder="Message" />

          <Button type="submit" className="w-full">
            Register Now
          </Button>
        </motion.form>

      </div>
    </section>
  );
};

export default RegisterFestivalPage;
