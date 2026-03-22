export class SanityError extends Error {
  constructor(
    message: string,
    public code?: string,
    public status?: number
  ) {
    super(message)
    this.name = 'SanityError'
  }
}

export async function fetchWithError<T>(
  fetcher: () => Promise<T>,
  errorMessage: string
): Promise<T> {
  try {
    return await fetcher()
  } catch (error) {
    console.error(`[Sanity Error] ${errorMessage}:`, error)
    throw new SanityError(
      errorMessage,
      error instanceof Error ? error.message : 'Unknown error'
    )
  }
}
