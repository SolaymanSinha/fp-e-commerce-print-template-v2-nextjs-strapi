import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
  return (
    <section className="w-full max-w-xl mx-auto px-4">
      <div className="text-center space-y-4">
        <h2 className="section-header">
          Subscribe To Our Newsletter
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Professional printing services can provide you with high-quality prints that will look great and last a long time. We have the equipment and expertise.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 mt-6 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your Email"
            className="flex-1"
            required
          />
          <Button 
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium"
          >
            Subscribe Now
          </Button>
        </form>
      </div>
    </section>
  )
}