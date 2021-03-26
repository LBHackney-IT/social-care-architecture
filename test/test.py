from diagrams import Cluster, Diagram
from diagrams.aws.compute import Lambda
from diagrams.aws.mobile import APIGateway
from diagrams.aws.database import RDSPostgresqlInstance
from diagrams.aws.database import RDSSqlServerInstance
from diagrams.aws.management import OrganizationsAccount

with Diagram("\nResidents Social Care Platform API", show=True, filename="platform-api-architecture"):
    with Cluster("Mosaic-Production"):
        APIGateway("API Gateway") >> Lambda("Lambda\n.NET Core App") >> RDSPostgresqlInstance("Database")
