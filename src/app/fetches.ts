import { ApiResponse, Banner, Doctor, Service, Article, Settings } from "@/types/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

async function fetcher<T>(
  endpoint: string,
  locale: string,
  options?: RequestInit
): Promise<ApiResponse<T> | null> {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        "X-Api-Access-Token": API_TOKEN || "",
        "Accept-Language": locale,
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      console.error(`Fetch error: ${response.status} ${response.statusText}`);
      return null;
    }

    const json: ApiResponse<T> = await response.json();
    return json;
  } catch (error) {
    console.error(`Fetch exception:`, error);
    return null;
  }
}

export async function getBanners(locale: string): Promise<Banner[]> {
  const res = await fetcher<Banner[]>("/website/banners", locale, {
    cache: "no-store",
  });

  return (res?.data || [])
    .filter((b) => b.is_published)
    .sort((a, b) => a.sort_order - b.sort_order);
}

export async function getDoctors(locale: string): Promise<Doctor[]> {
  const res = await fetcher<Doctor[]>("/website/doctors", locale, {
    cache: "no-store",
  });

  return res?.data || [];
}

export async function getServices(locale: string): Promise<Service[]> {
  const res = await fetcher<Service[]>("/website/services", locale, {
    cache: "no-store",
  });

  return res?.data || [];
}

export async function getArticles(locale: string): Promise<Article[]> {
  const res = await fetcher<Article[]>("/website/articles", locale, {
    cache: "no-store",
  });

  return res?.data || [];
}

export async function getArticlesPaginated(
  locale: string,
  page: number = 1
): Promise<ApiResponse<Article[]> | null> {
  return await fetcher<Article[]>(`/website/articles?page=${page}`, locale, {
    cache: "no-store",
  });
}

export async function getSettings(locale: string): Promise<Settings | null> {
  const res = await fetcher<Settings>("/website/settings", locale, {
    cache: "no-store",
  });

  return res?.data || null;
}
