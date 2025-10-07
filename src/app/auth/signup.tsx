import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SocialSignIn } from "./component/social";
import { ArrowLeftIcon } from "lucide-react";

export const SignUpPage = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader className="flex gap-2 items-center justify-center">
              <Button variant="outline" size="icon">
                <Link to="/">
                  <ArrowLeftIcon className="h-4 w-4" />
                </Link>
              </Button>
              <div className="text-center">
                <CardTitle className="text-xl">Welcome</CardTitle>
                <CardDescription>Sign up to your account</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <form>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                    <Input
                      className="h-10 "
                      id="fullName"
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      className="h-10 "
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                    />
                  </Field>
                  <Field>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a
                        href="#"
                        className="ml-auto text-sm underline-offset-4 hover:underline">
                        Forgot your password?
                      </a>
                    </div>
                    <Input
                      className="h-10 "
                      id="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Field>
                  <Field>
                    <Button type="submit" size="lg">
                      Sign in
                    </Button>
                    <FieldDescription className="text-center">
                      Already have an account?
                      <Link to="/signin" className="text-primary ml-1   ">
                        Sign in
                      </Link>
                    </FieldDescription>
                  </Field>
                  <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                    Or continue with
                  </FieldSeparator>
                  <SocialSignIn />
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
          <FieldDescription className="px-6 text-center">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a>
            and <a href="#">Privacy Policy</a>.
          </FieldDescription>
        </div>
      </div>
    </div>
  );
};
