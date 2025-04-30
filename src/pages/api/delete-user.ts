import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { data: { user }, error } = await supabaseClient.auth.getUser(token);

  if (error || !user) {
    return res.status(401).json({ error: "Invalid session" });
  }

  const { userId } = req.body;

  if (userId !== user.id) {
    return res.status(403).json({ error: "Forbidden - You can only delete your own account" });
  }

  // Instead of deleting now, insert into deletion_requests table
  const { error: insertError } = await supabaseAdmin.from("deletion_requests").insert([
    {
      user_id: userId,
    },
  ]);

  if (insertError) {
    console.error("Error inserting deletion request:", insertError.message);
    return res.status(500).json({ error: "Failed to request account deletion" });
  }

  return res.status(200).json({ message: "Account marked for deletion. Final deletion in 14 days." });
}
