"use client";

import Button from "@/components/ui/button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus } from "lucide-react";
import { useState } from "react";

interface MobilFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobilFiltersProps> = ({ colors, sizes }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <>
      <Button className="flex items-center gap-x-2 lg:hidden py-2" onClick={onOpen}>
        Filters
        <Plus size={18} />
      </Button>

      <Dialog
        open={open}
        as={"div"}
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* backgroud */}
        <div className="fixed inset-0 bg-black bg-opacity-25">

        </div>
      </Dialog>
    </>
  );
};
export default MobileFilters;
