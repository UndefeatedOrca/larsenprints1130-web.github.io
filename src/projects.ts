import { getCollection, type CollectionEntry } from 'astro:content';

type Project = CollectionEntry<'projects'>;

export const isPinned = (p: Project) =>
  p.data.tags.some((t) => t.toLowerCase() === 'pinned');

// Tags to show on the site: everything except "Pinned".
export const visibleTags = (tags: string[]) =>
  tags.filter((t) => t.toLowerCase() !== 'pinned');

// All published projects: pinned ones first, then the rest, newest first within each group.
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => !data.draft);
  const sorted = all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return [...sorted.filter(isPinned), ...sorted.filter((p) => !isPinned(p))];
}