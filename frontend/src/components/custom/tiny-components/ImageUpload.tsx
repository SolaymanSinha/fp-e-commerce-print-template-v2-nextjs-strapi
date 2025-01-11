import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
export function ImageUpload({label, className}: {label: string, className?: string}) {
  return (
    <div className={`grid w-full h-10 items-center gap-1.5 ${className}`}>
      <Label htmlFor="image">{label}</Label>
      <Input id="image" type="file" />
    </div>
  )
}