"use server";

import { z } from "zod";

const UrlSchema = z.string().url({ message: "Please enter a valid URL." });

type FormState = {
    message: string;
    platform: string | null;
    url: string | null;
}

export async function getVideoPlatform(prevState: FormState, formData: FormData): Promise<FormState> {
  const url = formData.get("url");

  const validatedUrl = UrlSchema.safeParse(url);

  if (!validatedUrl.success) {
    return {
      message: validatedUrl.error.errors[0].message,
      platform: null,
      url: null,
    };
  }

  // Bypassing AI check and returning a generic platform
  return {
    message: "success",
    platform: "Video",
    url: validatedUrl.data,
  };
}
