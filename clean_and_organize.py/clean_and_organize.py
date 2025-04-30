import os
import shutil

# Ayarlanabilir:
MAIN_PROJECT_NAME = "SteveAnaliz.web"  # veya "my-nextjs-app" gibi doğru proje klasörün adı

# Silinecek klasörler
JUNK_FOLDERS = [
    "my-nextjs-app", "my-nextjs-app-1", "SteveAnaliz.web.old",
    "node_modules", "dist", ".next", ".turbo", ".vercel", "build"
]

# Silinecek dosya uzantıları
JUNK_EXTENSIONS = [".log", ".tmp", ".DS_Store"]

def remove_junk_folders(base_path):
    for root, dirs, _ in os.walk(base_path):
        for d in dirs:
            if d in JUNK_FOLDERS:
                full_path = os.path.join(root, d)
                print(f"[🗑] Removing folder: {full_path}")
                shutil.rmtree(full_path, ignore_errors=True)

def remove_junk_files(base_path):
    for root, _, files in os.walk(base_path):
        for f in files:
            if any(f.endswith(ext) for ext in JUNK_EXTENSIONS):
                full_path = os.path.join(root, f)
                print(f"[🧹] Removing file: {full_path}")
                os.remove(full_path)

def move_to_root(source, dest):
    if not os.path.exists(source):
        return
    for item in os.listdir(source):
        s = os.path.join(source, item)
        d = os.path.join(dest, item)
        print(f"[📁] Moving {s} → {d}")
        if os.path.exists(d):
            print(f"[⚠️] {d} already exists, skipping.")
        else:
            shutil.move(s, d)
    shutil.rmtree(source)

def main():
    root_dir = os.getcwd()
    print(f"\n🚀 Working in: {root_dir}")

    remove_junk_folders(root_dir)
    remove_junk_files(root_dir)

    # Eğer proje "SteveAnaliz.web" gibi alt klasördeyse içeriğini köke taşı
    if os.path.exists(MAIN_PROJECT_NAME):
        move_to_root(MAIN_PROJECT_NAME, root_dir)

    print("\n✅ Cleanup and organization complete!")

if __name__ == "__main__":
    main()
