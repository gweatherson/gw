export function renderBadges(html: string): string {
  html = decodeHTMLEntities(html);
  html = html.replace(/#(\w+)/g, '<a href="/goods/tag/$1" class="badge badge-xs">#$1</a> ');
  html = html.replace(/((<a href="[^"]*" class="badge badge-xs">#\w+<\/a>\s*)+)(?=<a )/g, (match) => match + '<br>');
  return html;
}

function decodeHTMLEntities(text: string): string {
  return text.replace(/&#([0-9]+);/g, (match, dec) => String.fromCharCode(dec))
    .replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&amp;/g, '&');
}