export function renderBadges(html: string): string {
  html = html.replace(/#(\w+)/g, '<span class="badge badge-xs">#$1</span> ');
  html = html.replace(/((<span class="badge badge-xs">#\w+<\/span>\s*)+)(?=<a )/g, (match) => match + '<br>');
  return html;
}