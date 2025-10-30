export function extractTagsFromContent(html: string): string[] {
  const tagRegex = /#(\w+)/g;
  const tags: string[] = [];
  let match;

  while ((match = tagRegex.exec(html)) !== null) {
    if (!tags.includes(match[1])) {
      tags.push(match[1]);
    }
  }

  return tags;
}

export function getGoodsWithTag(goods: any[], tag: string): any[] {
  return goods.filter(item => {
    const tags = extractTagsFromContent(item.rendered?.html || '');
    return tags.includes(tag);
  })
}