// Thay các placeholder dạng {key} trong chuỗi dictionary, ví dụ format("Màn hình {n}", { n: 2 }).
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match));
}
