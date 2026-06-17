const MAX_DIMENSION = 2048;
const JPEG_QUALITY = 0.8;
const SKIP_THRESHOLD = 500 * 1024; // 500 KB

function isHeic(file: File): boolean {
  const type = file.type.toLowerCase();
  if (type === 'image/heic' || type === 'image/heif') return true;
  const ext = file.name.toLowerCase();
  return ext.endsWith('.heic') || ext.endsWith('.heif');
}

export async function compressImage(file: File): Promise<File> {
  if (isHeic(file)) {
    throw new Error('HEIC/HEIF photos are not supported. Please upload JPEG, PNG, or WebP images.');
  }

  if (file.type === 'image/jpeg' && file.size <= SKIP_THRESHOLD) {
    return file;
  }

  const bitmap = await createImageBitmap(file);
  const { width, height } = bitmap;

  let newWidth = width;
  let newHeight = height;

  if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
    const ratio = Math.min(MAX_DIMENSION / width, MAX_DIMENSION / height);
    newWidth = Math.round(width * ratio);
    newHeight = Math.round(height * ratio);
  }

  const canvas = new OffscreenCanvas(newWidth, newHeight);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');
  ctx.drawImage(bitmap, 0, 0, newWidth, newHeight);
  bitmap.close();

  const blob = await canvas.convertToBlob({ type: 'image/jpeg', quality: JPEG_QUALITY });

  const name = file.name.replace(/\.[^.]+$/, '.jpg');
  return new File([blob], name, { type: 'image/jpeg' });
}
