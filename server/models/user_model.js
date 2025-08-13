import supabase from "../util/supabase-client.js";
export const findbyuseremail = async (user_email) => {
  try {
    const { data, error } = await supabase
      .from("users_new")
      .select("*")
      .eq("user_emails", user_email)
      .maybeSingle(); // Ensures only one row is returned

    if (error) throw error;

    console.log("jai mata di ", data); // This will now execute
    return data;
  } catch (error) {
    console.error("Error fetching user:", error.message);
    return null; // Return null in case of error
  }
};

// create a  new user in the database
export const createuser = async (
  user_first_name,
  user_last_name,
  user_email,
  user_password,
  user_phone_number
) => {
  try {
    // Insert user into the "users" table
    const { data, error } = await supabase
      .from("users_new")
      .insert([
        {
          user_emails: user_email,
          user_password_hash: user_password, // Make sure to hash the password before storing!
          user_first_name: user_first_name,
          user_last_name: user_last_name,
          user_phone_number: user_phone_number, // Ensure the column name matches your DB
          // Ensure the column name matches your DB
        },
      ])
      .select("*"); // Returns inserted data

    if (error) throw error;

    console.log("user created successfully:", data);
    return data; // Return inserted candidate data
  } catch (error) {
    console.error("Error inserting user:", error.message);
    return null; // Return null in case of error
  }
};
