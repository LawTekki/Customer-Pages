import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const CreateDisputeDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button 
          className="bg-[#6B047C] hover:bg-[#4A0356] text-white font-medium rounded-lg px-6 py-3 text-sm mt-2 md:mt-0 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md fade-in hover-lift max-md:w-full max-md:px-2" 
          style={{ animationDelay: '0.2s' }}
        >
          Create Dispute
        </button>
      </DialogTrigger>
      <DialogContent 
        className="sm:max-w-[600px] p-0"
        style={{ maxHeight: '90vh', overflow: 'auto', padding: 0 }}
      >
        <div className="p-6" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#1A011E]">Create Dispute</DialogTitle>
          </DialogHeader>
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="orderNumber" className="text-sm font-medium text-[#1A011E]">
                Order Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="orderNumber"
                placeholder="Enter order number"
                className="border-[#E6E6E6] focus:border-[#6B047C] focus:ring-[#6B047C] focus:outline-none"
                style={{ boxShadow: 'none' }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category" className="text-sm font-medium text-[#1A011E]">
                Dispute Category <span className="text-red-500">*</span>
              </Label>
              <Select>
                <SelectTrigger className="border-[#E6E6E6] focus:border-[#6B047C] focus:ring-[#6B047C] focus:outline-none" style={{ boxShadow: 'none' }}>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="order_not_received">Order not received</SelectItem>
                  <SelectItem value="quality_issue">Quality issue</SelectItem>
                  <SelectItem value="delivery_delay">Delivery delay</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description" className="text-sm font-medium text-[#1A011E]">
                Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Enter dispute description"
                className="min-h-[120px] border-[#E6E6E6] focus:border-[#6B047C] focus:ring-[#6B047C] focus:outline-none"
                style={{ resize: 'none', boxShadow: 'none' }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="documents" className="text-sm font-medium text-[#1A011E]">
                Supporting Documents
              </Label>
              <div className="border-2 border-dashed border-[#E6E6E6] rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="documents"
                  className="hidden"
                  multiple
                />
                <label
                  htmlFor="documents"
                  className="cursor-pointer text-[#6B047C] hover:text-[#4A0356]"
                >
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span className="text-sm font-medium">Click to upload files</span>
                    <span className="text-xs text-[#808080]">or drag and drop</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="border-[#E6E6E6] text-[#1A011E] hover:bg-[#F5F5F5]"
            >
              Cancel
            </Button>
            <Button
              className="bg-[#6B047C] hover:bg-[#4A0356] text-white"
            >
              Submit Dispute
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 