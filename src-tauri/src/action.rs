#[tauri::command]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
#[tauri::command]
pub fn get_os() -> String {
    tauri_plugin_os::platform().to_string()
}
