variable "resource_group_name" {
  type        = string
  description = "The name of the resource group"
}

variable "resource_group_location" {
  type        = string
  description = "The location of the resource group"
}

variable "app_service_plan_name" {
  type        = string
  description = "The app service plan name"
}

variable "app_service_name" {
  type        = string
  description = "The app service name"
}

variable "sql_server_name" {
  type        = string
  description = "The sql server name"
}

variable "sql_database_name" {
  type        = string
  description = "The name of database"
}

variable "sql_admin_login_username" {
  type        = string
  description = "The username for sql user"
}

variable "sql_admin_login_password" {
  type        = string
  description = "The password for sql user"
}

variable "firewall_rule_name" {
  type        = string
  description = "The name of firewall rule"
}

variable "github_repo_url" {
  type        = string
  description = "The URL of GitHub repo"
}