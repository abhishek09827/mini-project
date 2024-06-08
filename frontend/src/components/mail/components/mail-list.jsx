import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { cn } from "../../../../lib/utils.js";
import { Badge } from "../../../../components/ui/badge";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";
import { useState } from "react";
import { useEffect } from "react";

export function MailList({ items, onMailSelect }) {
  const [selectedMail, setSelectedMail] = useState(null);
  const [tags, setTags] = useState([]);

  const handleMailSelect = (item) => {
    setSelectedMail(item);
    onMailSelect(item.author_id);
  };

  return (
    <ScrollArea className="h-screen">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item) => (
          <button
            key={item.author_id}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent dark:text-zinc-200",
              selectedMail?.author_id === item.author_id && "bg-muted",
            )}
            onClick={() => handleMailSelect(item)}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold dark:text-zinc-200">{item.platform}</div>
                  {!item.read && (
                    <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs",
                    selectedMail?.author_id === item.author_id
                      ? "text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.author_id}
                </div>
              </div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.cleaned_content.substring(0, 300)}
            </div>
            {tags.length ? (
              <div className="flex items-center gap-2">
                {tags.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null}
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}

function getBadgeVariantFromLabel(label) {
  if (["work"].includes(label.toLowerCase())) {
    return "default";
  }

  if (["personal"].includes(label.toLowerCase())) {
    return "outline";
  }

  return "secondary";
}
