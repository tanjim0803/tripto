import React from "react";
import { CheckCircle2, Clock, Calendar, Ban, User, Moon, Cigarette, Dog } from "lucide-react";

export function HotelPolicies() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-slate-900">Policies</h2>
      <p className="text-slate-600">All payment methods, takes special requests - add in the next step!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PolicyItem
          icon={<Clock size={20} />}
          title="Check-in"
          description="from 15:00 to 18:00. You'll need to provide any information in advance."
        />
        <PolicyItem
          icon={<Calendar size={20} />}
          title="Check-out"
          description="from 08:00 to 12:00."
        />
        <PolicyItem
          icon={<Ban size={20} />}
          title="Cancellation/prepayment"
          description="Cancellation and prepayment policies vary according to accommodation type. Please check condition."
        />
        <PolicyItem
          icon={<User size={20} />}
          title="Children and beds"
          description="Children of any age are welcome. Extra beds and baby cots are available upon request."
        />
        <PolicyItem
          icon={<Clock size={20} />}
          title="No age restriction"
          description="Guests of all ages are welcome."
        />
        <PolicyItem
          icon={<Moon size={20} />}
          title="Quiet hours"
          description="Guests must be quiet between 22:00 and 10:00."
        />
        <PolicyItem
          icon={<Cigarette size={20} />}
          title="Smoking"
          description="Smoking is not allowed."
        />
        <PolicyItem
          icon={<Dog size={20} />}
          title="Pets"
          description="Pets are not allowed."
        />
      </div>
    </div>
  );
}

function PolicyItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4 p-4 border rounded-2xl">
      <div className="p-3 bg-slate-100 rounded-xl text-slate-700 h-fit">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
