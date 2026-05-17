import { motion } from "framer-motion";
import { FileText, MoreHorizontal, Activity, MessageCircle, BarChart3, Clock } from "lucide-react";
import { Badge } from "./ui/badge";

export function DashboardMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/20 bg-background/40 backdrop-blur-xl shadow-2xl">
      {/* App Header */}
      <div className="h-12 border-b border-border/50 flex items-center px-4 justify-between bg-card/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="h-6 w-48 bg-muted rounded-md" />
        <div className="w-6 h-6 rounded-full bg-primary/20" />
      </div>

      {/* Main Layout */}
      <div className="flex p-4 gap-4 h-[400px]">
        {/* Sidebar */}
        <div className="w-16 flex flex-col gap-4 items-center border-r border-border/50 pr-4">
          <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-md">
            <Activity className="h-5 w-5" />
          </div>
          <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground flex items-center justify-center">
            <FileText className="h-5 w-5" />
          </div>
          <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground flex items-center justify-center">
            <BarChart3 className="h-5 w-5" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Top Stats */}
          <div className="flex gap-4">
            <div className="flex-1 bg-card rounded-xl p-4 border shadow-sm flex flex-col justify-center">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Pending</span>
              <span className="text-2xl font-bold text-foreground">12</span>
            </div>
            <div className="flex-1 bg-card rounded-xl p-4 border shadow-sm flex flex-col justify-center">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Completed</span>
              <span className="text-2xl font-bold text-foreground">1,204</span>
            </div>
            <div className="flex-1 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 shadow-sm text-white flex flex-col justify-center relative overflow-hidden">
              <MessageCircle className="absolute right-[-10px] bottom-[-10px] h-16 w-16 text-white/20" />
              <span className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-90">WhatsApp Active</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-sm font-medium">Monitoring</span>
              </div>
            </div>
          </div>

          {/* Doc List */}
          <div className="flex-1 bg-card rounded-xl border shadow-sm flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h4 className="font-semibold text-sm">Recent Documents</h4>
              <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden">
              {[
                { title: "Master Services Agreement — Acme Bank", status: "Pending", color: "bg-yellow-100 text-yellow-800" },
                { title: "Vendor NDA — Pinnacle Logistics", status: "Signed", color: "bg-green-100 text-green-800" },
                { title: "Employment Offer — K. Mensah", status: "In Review", color: "bg-blue-100 text-blue-800" },
                { title: "Loan Disbursement — Q3 Batch", status: "Signed", color: "bg-green-100 text-green-800" },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{doc.title}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> Updated 2h ago
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className={`${doc.color} border-none`}>{doc.status}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
