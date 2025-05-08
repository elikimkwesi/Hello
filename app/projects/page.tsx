import { redirect } from "next/navigation"

export default function Projects() {
  // Redirect to services page since we don't have a dedicated projects page yet
  redirect("/services")
}
