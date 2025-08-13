import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL;
// console.log(supabaseUrl);
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
// console.log(supabase);
export default supabase;
