import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";
import format from "date-fns/format";
import ReactMarkdown from 'react-markdown';
import nextSaturday from "date-fns/nextSaturday";
import {
  Archive,
  ArchiveX,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import axios from "axios";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Calendar } from "../../../../components/ui/calendar";
import { Badge } from "../../../../components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "../../../../components/ui/dropdown-menu";
import { Label } from "../../../../components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../components/ui/popover";
import { Separator } from "../../../../components/ui/separator";
import { Switch } from "../../../../components/ui/switch";
import { Textarea } from "../../../../components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../../../../components/ui/tooltip";

import { useEffect, useState } from "react";
export function MailDisplay({ mail }) {
  const today = new Date();
  const [data, setData] = useState("")
  const [tdata, setTrendsData] = useState("")
  const [tags, setTags] = useState(['', '', ''])
  useEffect(() => {
    const fetchData = async () => {

      const dataToSend = {
        reviews: mail.comments
      };

      try {
        const response = await axios.post('http://127.0.0.1:5000/process_reviews', dataToSend);
        const data = response.data.insights;
        setData(data) // Assuming the response contains the data in `response.data`
        console.log('Response:', data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    const trendsData = async () => {
      const dataToSend = {
        reviews: mail.comments
      };

      try {
        const response = await axios.post('http://127.0.0.1:5000/trends_review', dataToSend);
        const data = response.data.trends;
        setTrendsData(data) // Assuming the response contains the data in `response.data`
        console.log('Response:', data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
    const tagsData = async () => {
      const dataToSend = {
        text: mail.cleaned_content
      };

      try {
        const response = await axios.post('http://127.0.0.1:5000/analyze', dataToSend);
        const data = response.data;
        setTags(data) // Assuming the response contains the data in `response.data`
        console.log('Response:', data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    tagsData();
    trendsData()

    fetchData();
  }, [mail]); 

  
  


  return (
    
    <div className="flex h-full flex-col dark:text-zinc-200">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
  
        {tags.length ? (
              <div className="flex items-center gap-2">
                {tags.map((label) => (
                  <Badge key={label} variant={getBadgeVariantFromLabel(label)}>
                    {label}
                  </Badge>
                ))}
              </div>
            ) : null}
        </div>
        <div className="ml-auto flex items-center gap-2">
          
        </div>
        
      </div>
      
      <Separator />
      
      {mail ? (
        
        <div className="flex flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={mail.name} />
                <AvatarFallback>
                  {mail.platform
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{mail.platform}</div>
                
                <div className="line-clamp-1 text-xs">{mail.cleaned_content}</div>
                
              </div>
            </div>
            
            
          </div>
          <ScrollArea className="h-screen">
          <Separator />
          
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
          <ReactMarkdown>{`Insights : ${data}`}</ReactMarkdown>
          </div>
          <Separator className="mt-auto" />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
          <ReactMarkdown>{`Trends : ${tdata}`}</ReactMarkdown>
            
          </div>
          <Separator className="mt-auto" />
          </ScrollArea>
          <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Textarea
                  className="p-4"
                  placeholder={`Reply `}
                />
                <div className="flex items-center">
                  <Label
                    htmlFor="mute"
                    className="flex items-center gap-2 text-xs font-normal"
                  >
                    <Switch id="mute" aria-label="Mute thread" /> Mute this
                    thread
                  </Label>
                  <Button
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                    className="ml-auto"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
        
      )}
      
    </div>
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
