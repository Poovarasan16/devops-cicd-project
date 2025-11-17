variable "aws_region" {
  description = "AWS region"
  default     = "us-east-1"
}

variable "cluster_name" {
  description = "EKS cluster name"
  default     = "devops-demo-cluster"
}

variable "subnet_ids" {
  description = "List of subnet IDs"
  type        = list(string)
}
