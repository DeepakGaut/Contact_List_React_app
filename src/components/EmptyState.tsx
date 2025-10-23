import { Users } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <div className="rounded-full bg-primary/10 p-6 mb-4">
        <Users className="h-12 w-12 text-primary" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">No contacts found</h3>
      <p className="text-muted-foreground text-center max-w-sm">
        Start building your contact list by adding your first contact above.
      </p>
    </div>
  );
};
