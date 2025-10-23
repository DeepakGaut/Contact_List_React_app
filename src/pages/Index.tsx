import { useState, useEffect } from "react";
import { Contact } from "@/types/contact";
import { initialContacts } from "@/data/contacts";
import { ContactCard } from "@/components/ContactCard";
import { SearchBar } from "@/components/SearchBar";
import { AddContactModal } from "@/components/AddContactModal";
import { EmptyState } from "@/components/EmptyState";
import { toast } from "sonner";

const STORAGE_KEY = "contacts-list";

const Index = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load contacts from localStorage or use initial data
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setContacts(JSON.parse(stored));
    } else {
      setContacts(initialContacts);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialContacts));
    }
    
    // Simulate loading for better UX
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  useEffect(() => {
    // Save to localStorage whenever contacts change
    if (contacts.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleAddContact = (newContact: Omit<Contact, "id">) => {
    const contact: Contact = {
      ...newContact,
      id: Date.now().toString(),
    };
    setContacts((prev) => [contact, ...prev]);
  };

  const handleDeleteContact = (id: string) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
    toast.success("Contact deleted successfully");
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary flex items-center justify-center">
        <div className="animate-pulse text-primary text-lg">Loading contacts...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Contact List
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage your contacts efficiently
          </p>
        </div>

        {/* Search and Add Section */}
        <div className="bg-card rounded-xl shadow-lg p-6 mb-6 border border-border">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>
            <AddContactModal onAdd={handleAddContact} />
          </div>
          
          {searchQuery && (
            <div className="mt-3 text-sm text-muted-foreground">
              Found {filteredContacts.length} contact{filteredContacts.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        {/* Contacts List */}
        <div className="space-y-3">
          {filteredContacts.length === 0 ? (
            <div className="bg-card rounded-xl shadow-lg border border-border">
              <EmptyState />
            </div>
          ) : (
            filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={handleDeleteContact}
              />
            ))
          )}
        </div>

        {/* Stats Footer */}
        {contacts.length > 0 && (
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Total contacts: {contacts.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
