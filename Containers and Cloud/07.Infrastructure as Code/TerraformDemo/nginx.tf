terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {
  host = "npipe:////./pipe/docker_engine"
}

resource "docker_image" "nginximage" {
  name = "nginxdemos/hello"
}

resource "docker_container" "nginxvladi" {
  name  = "vladi-container-nginx"
  image = resource.docker_image.nginximage.name

  ports {
    internal = "80"
    external = "8001"
  }
}

resource "docker_volume" "shared_volume" {
  name = "shared_volume"
}