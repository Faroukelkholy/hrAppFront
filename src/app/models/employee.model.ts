export interface Employee
{
   name: string; email: string; mobile: string; title?: string; gender?: string; major?: string; notif_settings?: Array<{ title: string, value: string }>; notification_id?: string; status?: string; class?: string; device_tokens?: string; firstname?: string; lastname?: string; district?: string; department?: string;
}
