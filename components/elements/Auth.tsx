import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { LoginForm } from "./FormLogin"
import { SignUpForm } from "./FormSignup"

export function Auth() {
  return (
    <Tabs defaultValue="Signin" className="w-[400px] ">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="Signin" >Sign-in</TabsTrigger>
        <TabsTrigger value="Signup" >Sign-up</TabsTrigger>
      </TabsList>
      <TabsContent value="Signin">
        <LoginForm />
      </TabsContent>
      <TabsContent value="Signup">
        <SignUpForm/>
      </TabsContent>
    </Tabs>
  )
}
