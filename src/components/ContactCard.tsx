import { Contact } from "@/types/contact";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Trash2 } from "lucide-react";

interface ContactCardProps {
  contact: Contact;
  onDelete: (id: string) => void;
}

export const ContactCard = ({ contact, onDelete }: ContactCardProps) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-all duration-200 bg-card border-border">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12 bg-primary/10 text-primary border-2 border-primary/20">
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
            {getInitials(contact.name)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-foreground mb-2 truncate">
            {contact.name}
          </h3>
          
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{contact.email}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{contact.phone}</span>
            </div>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(contact.id)}
          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors flex-shrink-0"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
