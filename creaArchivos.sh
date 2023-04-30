#!/bin/bash

# Define el nombre de los controllers
controllers=("users" "organizations" "organization_plans" "organization_plan_features" "organization_users" "organization_settings" "clients" "cost_centers" "projects" "project_tasks" "project_task_logs" "project_task_attachments" "project_task_comments" "project_task_assignees" "project_task_assignee_logs" "project_task_assignee_attachments" "project_task_assignee_comments" "project_task_assignee_payments" "project_task_assignee_payment_attachments" "invoices" "invoice_items" "payments" "payment_attachments")

# Itera sobre los nombres de los controllers y crea un archivo para cada uno
for controller in "${controllers[@]}"
do
    touch "api/controllers/${controller}.js"
    echo "const ${controller}Controller = {" >> "api/controllers/${controller}.js"
    echo "  // Implementa aquí los métodos del controller para ${controller}" >> "api/controllers/${controller}.js"
    echo "}" >> "api/controllers/${controller}.js"
    echo "" >> "api/controllers/${controller}.js"
    echo "module.exports = ${controller}Controller;" >> "api/controllers/${controller}.js"
done
