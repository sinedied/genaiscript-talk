import type { CSSProperties } from 'vue'

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(_background?: string, dim = false): CSSProperties {
  let background = _background;
  const isColor = background && (['#', 'rgb', 'hsl'].some(v => background.indexOf(v) === 0));
  const isCss = background && (['url', 'gradient'].some(v => background.includes(v)));

  // If background contains "url(...)", extract the URL and resolve it
  if (background && background.includes('url(')) {
    const urlMatch = background.match(/url\(['"]?(.*?)['"]?\)/);
    if (urlMatch && urlMatch[1]) {
      const originalUrl = urlMatch[1];
      const resolvedUrl = resolveAssetUrl(originalUrl);
      background = background.replace(originalUrl, resolvedUrl);
    }
  }
  
  const style = {
    ...(isColor || isCss ? {
      background: isColor || isCss
        ? background
        : undefined,
    } : {
      backgroundImage: isColor || isCss
        ? undefined
        : background
          ? dim
            ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
            : `url("${resolveAssetUrl(background)}")`
          : undefined,
    }),
    color: (background && !isColor)
      ? 'white'
      : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return style
}
