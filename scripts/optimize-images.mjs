#!/usr/bin/env node
/**
 * Image Optimization Script
 *
 * Run: npm install sharp && node scripts/optimize-images.mjs
 *
 * This script will:
 * 1. Convert PNG/JPG to WebP format
 * 2. Reduce image quality to 80% (visually lossless)
 * 3. Resize thumbnails to max 800px width
 */

import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join, extname, basename } from 'path';

const ASSETS_DIR = './src/assets';
const MAX_WIDTH = 800;
const QUALITY = 80;

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...\n');

  const files = await readdir(ASSETS_DIR);
  const imageFiles = files.filter(f =>
    /\.(png|jpg|jpeg)$/i.test(f) && !f.includes('.backup')
  );

  let totalSaved = 0;

  for (const file of imageFiles) {
    const filePath = join(ASSETS_DIR, file);
    const stats = await stat(filePath);
    const originalSize = stats.size;

    const name = basename(file, extname(file));
    const outputPath = join(ASSETS_DIR, `${name}.webp`);

    try {
      await sharp(filePath)
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const newStats = await stat(outputPath);
      const saved = originalSize - newStats.size;
      totalSaved += saved;

      console.log(`✅ ${file}`);
      console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024).toFixed(0)}KB`);
      console.log(`   Saved: ${(saved / 1024 / 1024).toFixed(2)}MB\n`);

      // Backup original
      await rename(filePath, join(ASSETS_DIR, `${file}.backup`));

    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log('━'.repeat(40));
  console.log(`Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  console.log('\n📝 Remember to update imports in your components from .png/.jpg to .webp');
}

optimizeImages().catch(console.error);
