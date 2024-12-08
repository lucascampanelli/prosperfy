export function formatFileSize(fileSize: number): string {
    const units = ["B", "KB", "MB", "GB", "TB"];

    let unitIndex = 0;
    let fileSizeInUnit = fileSize;

    while (fileSizeInUnit >= 1024) {
        fileSizeInUnit /= 1024;
        unitIndex++;
    }

    return `${fileSizeInUnit.toFixed(2)} ${units[unitIndex]}`;
}